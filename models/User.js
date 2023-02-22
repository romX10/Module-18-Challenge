const { Schema, model } = require('mongoose');

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        email: {
            type: String,
            required: [true, 'User email address required'],
            unique: true,
            validate: {
                validator: function(value) {
                    return /^[a-zA-Z0-9.!#$%&*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value);
                },
                message: props => `${props.message} is not a valid email address!`
            }

        },
        thoughts: [{type: Schema.Types.ObjectId, ref: 'Thought'}],
        friends: [{type: Schema.Types.ObjectId, ref: 'User'}],
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

userSchema.virtual('friendCount').get(function () {
    return this.friends.length;
});

const User = model('user', userSchema);

module.exports = User;
