import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useBlogStore = defineStore('blogStore', {
  state: () => {
    return {
      blogs: [],
      blog: {}
    }
  },

  actions: {
    async getBlogs() {
      const res = await fetch("http://localhost:3000/blog-posts")
      const blogs = await res.json()

      this.blogs = blogs
      console.log("qqqqqqq",blogs)
  },
  async getBlog(id) {
    const res = await fetch("http://localhost:3000/blog-posts/" + id)
    const product = await res.json()

    this.blog = product
}
  
}
}
)
