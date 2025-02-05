import { Suspense } from "react"
import ComparisonContent from "./ComparisonContent"

export default function ComparisonPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ComparisonContent />
    </Suspense>
  )
}

