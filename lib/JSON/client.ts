import fs from "fs/promises"
import path from "path"

const DB_DIR = path.join(process.cwd(), "data")

async function ensureDbDir() {
  try {
    await fs.access(DB_DIR)
  } catch {
    await fs.mkdir(DB_DIR, { recursive: true })
  }
}

export async function readCollection<T>(collectionName: string): Promise<T[]> {
  await ensureDbDir()
  const filePath = path.join(DB_DIR, `${collectionName}.json`)

  try {
    const fileContent = await fs.readFile(filePath, "utf-8")
    return JSON.parse(fileContent) as T[]
  } catch (error: any) {
    if (error.code === "ENOENT") {
      return []
    }
    throw error
  }
}

export async function writeCollection<T>(collectionName: string, data: T[]): Promise<void> {
  await ensureDbDir()
  const filePath = path.join(DB_DIR, `${collectionName}.json`)

  await fs.writeFile(filePath, JSON.stringify(data, null, 2), "utf-8")
}