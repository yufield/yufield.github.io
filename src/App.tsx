import { defineComponent } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import './App.css'
export const App = defineComponent({
  render() {
    return (
      <>
        <div id="nav">
          <RouterLink to="/">Home</RouterLink> |
          <RouterLink to="/about">About</RouterLink>
        </div>
        <RouterView />
      </>
    )
  }
})