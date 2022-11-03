const { Schema, model } = require ('mongoose')

const thoughtSchema = new Schema ({
  thoughtText: {
    type: String,
    required: true,
    min_length: 1,
    max_length: 280
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  username: {
    type: String,
    required: true
  },
  reactions: [reactionSchema],
  toJSON: {
    virtuals: true,
  },
  id: false,
});

const reactionSchema = new Schema ({
  reactionId: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId()
  },
  reactionBody: {
    type: String,
    required: true,
    max_length: 280
  },
  usermame: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
})