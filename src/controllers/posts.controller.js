const { body, validationResult } = require('express-validator')

const { Post } = require('../models/index')

const BaseController = require('../core/base.controller')

class PostsController extends BaseController {
  initRoutes () {
    this.path = '/posts'
    /* GET /posts */
    this.router.get('/', this.indexAction)

    /* POST /posts */
    this.router.post('/',
      body('title').isLength({ min: 5, max: 64 }),
      body('content').isLength({ min: 5, max: 2048 }),
      this.createAction
    )

    /* GET /posts/:id */
    this.router.get('/:id', this.showAction)

    /* PATCH /posts/:id */
    this.router.patch('/:id',
      body('title').isLength({ min: 5, max: 64 }),
      body('content').isLength({ min: 5, max: 2048 }),
      this.updateAction
    )

    /* DELETE /posts/:id */
    this.router.delete('/:id', this.deleteAction)
  }

  async indexAction (req, res) {
    /* Fetch all posts */
    const posts = await Post.findAll()
    res.send(posts)
  }

  async createAction (req, res) {
    /* Validate body params */
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    /* Create post */
    const { title, content } = req.body
    const post = await Post.create({ title, content })
    res.send(post)
  }

  async showAction (req, res) {
    /* Find post */
    const post = await Post.findByPk(req.params.id)
    if (!post) {
      return res.status(404).json({ errors: [{ msg: 'Not found' }] })
    }
    res.send(post)
  }

  async updateAction (req, res) {
    /* Find post */
    const post = await Post.findByPk(req.params.id)
    if (!post) {
      return res.status(404).json({ errors: [{ msg: 'Not found' }] })
    }

    /* Validate body params */
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    /* Update post */
    const { title, content } = req.body
    await post.update({ title, content })

    res.send(post)
  }

  async deleteAction (req, res) {
    /* Find post */
    const post = await Post.findByPk(req.params.id)
    if (!post) {
      return res.status(404).json({ errors: [{ msg: 'Not found' }] })
    }

    /* Delete post */
    await post.destroy()
    res.status(204).json(null)
  }
}

module.exports = PostsController
