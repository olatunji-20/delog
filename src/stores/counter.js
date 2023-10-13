import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useBlogStore = defineStore('blogStore', {
  state: () => {
    return {
      blogs: [],
      blog: {},
      teamMembers: []
    }
  },

  actions: {
    async getBlogs() {
      try {
        const res = await axios.get("http://localhost:3000/blog-posts");
        this.blogs = res.data;
      } catch (err) {
        console.log("ERROR IN FECTHING BLOGS", err);
      }
    },
    async getBlog(id) {
      try {
        const res = await axios.get("http://localhost:3000/blog-posts/" + id);
        const singleBlog = await res.data;
        this.blog = singleBlog
      } catch (err) {
        console.log("COULDN'T FETCH THIS BLOG", err)
      }
    },
    async getTeamMembers() {
      try {
        const res = await axios.get("http://localhost:3000/team-members");
        this.teamMembers = res.data;
      } catch (err) {
        console.log("ERROR IN FECTHING TEAM MEMBERS", err);
      }
    }

  }
}
)
