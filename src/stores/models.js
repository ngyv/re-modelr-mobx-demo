import reModelr from '@ngyv/re-modelr'
const { BaseModel } = reModelr
import { types } from '@ngyv/prop-utils'
import { decorate, observable } from 'mobx'

class UserModel extends BaseModel {
  _attributes() {
    return {
      id: types.number,
      name: types.string,
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
      id: types.number,
      body: types.string,
      name: types.string,
      postId: types.number,
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
      id: types.number,
      title: types.string,
      userId: types.number,
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
