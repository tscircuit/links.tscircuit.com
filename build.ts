import { mkdir } from "node:fs/promises"
import { file } from "bun"

async function build() {
  console.log("Building static site...")

  // Create dist directory
  await mkdir("dist", { recursive: true })

  // Copy index.html to dist
  const indexHtml = await file("index.html").text()
  await Bun.write("dist/index.html", indexHtml)

  console.log("✓ Built successfully to dist/")
  console.log("  - dist/index.html")
}

build().catch((error) => {
  console.error("Build failed:", error)
  process.exit(1)
})
