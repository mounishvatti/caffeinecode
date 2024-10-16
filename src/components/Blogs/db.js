import { Schema as _Schema, Types, model } from "mongoose";

const Schema = _Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
  },

  firstName: {
    type: String,
    required: true,
  },

  lastName: {
    type: String,
    required: true,
  },
});

const adminSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },

  firstName: {
    type: String,
    required: true,
  },

  lastName: {
    type: String,
    required: true,
  },
});

const blogSchema = new Schema({
  title: {
    type: String,
    required: true,
  },

  description: {
    type: String,
  },

  tags: {
    type: Array,

  },

  createdAt: {
    type: Date,
    default: Date.now,
  },

  imageUrl: {
    type: String,
  },

  creatorId: {
    type: Schema.Types.ObjectId,
    ref: "admin",
  },

});

blogSchema.set("timestamps", true);
userSchema.set("timestamps", true);
adminSchema.set("timestamps", true);

const userModel = model("user", userSchema);
const adminModel = model("admin", adminSchema);
const blogModel = model("blog", blogSchema);

export { userModel, adminModel, blogModel };