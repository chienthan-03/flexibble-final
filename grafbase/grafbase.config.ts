import { g, auth, config } from '@grafbase/sdk'

const User = g.model("User", {
  name: g.string().length({min: 2, max: 20}),
  email: g.string().unique(),
  description: g.string(),
  githubUrl: g.url().optional(),
  projects: g.relation(() => Projects).list().optional(),
})

const Projects = g.model("Project", {
  title: g.string().length({min: 3}),
  description: g.string(),
  image: g.url(),
  githubUrl: g.url().optional(),
  catarory: g.string().search(),
  createBy: g.relation(() => User)
})

export default config({
  schema: g

})
