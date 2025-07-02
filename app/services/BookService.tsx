import { IBook } from "@interfaces/Book"

enum DevelopmentState {
  TESTING_LOCAL_API = "TESTING_LOCAL_API",
  TESTING_REMOTE_API = "TESTING_REMOTE_API",
  PRODUCTION = "PRODUCTION",
}

export async function getBooks(): Promise<IBook[]> {
  const DEVELOPMENT_STATE = process.env.DEVELOPMENT_STATE

  // Peticion a la api
  if (DEVELOPMENT_STATE === DevelopmentState.TESTING_LOCAL_API) {
    console.info(DevelopmentState.TESTING_LOCAL_API)
    const response = await fetch(process.env.LOCAL_BOOKS_ENDPOINT_URL || "")

    return await response.json()
  } else if (DEVELOPMENT_STATE === DevelopmentState.TESTING_REMOTE_API) {
    console.info(DevelopmentState.TESTING_REMOTE_API)
    const response = await fetch(process.env.REMOTE_MOCKAPI_URL || "")

    return await response.json()
  } else {
    console.info(DevelopmentState.PRODUCTION)
    const response = await fetch(process.env.REMOTE_MOCKAPI_URL || "")

    return await response.json()
  }
}
