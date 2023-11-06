import rSkeleton from './index.vue'
import rSkeletonItem from './r-skeleton-item.vue'

rSkeleton.install = (app) => {
  app.component(rSkeleton.name, rSkeleton)
  app.component(rSkeletonItem.name, rSkeletonItem)
}

export default rSkeleton
