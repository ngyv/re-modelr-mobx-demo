import { BaseModel, type } from '@ngyv/re-modelr'
import { decorate, observable } from 'mobx'

class UserModel extends BaseModel {
  _attributes() {
    return {
      id: type('number'),
      name: type('string'),
    }
  }
}
decorate(UserModel, {
  id: observable,
  name: observable,
})
class CommentModel extends BaseModel {
  _attributes() {
    return {
      id: type('number'),
      body: type('string'),
      name: type('string'),
      postId: type('number'),
    }
  }
}
decorate(CommentModel, {
  id: observable,
  body: observable,
  name: observable,
  postId: observable,
})
class PostModel extends BaseModel {
  _attributes() {
    return {
      id: type('number'),
      title: type('string'),
      userId: type('number'),
    }
  }
}
decorate(PostModel, {
  id: observable,
  title: observable,
  userId: observable,
})

export default {
  CommentModel,
  UserModel,
  PostModel
}
