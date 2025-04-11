////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import { processString } from "@/utils/processString"
import { generateGlobalConfig, type GlobalConfig } from "@jbprophecy/hot-box"

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

type ClientEnvironment = {
  VITE_API_URL: string
}

function processClientEnvironment(): ClientEnvironment {
  try {
    console.log("Processing Client Environment")
    const clientEnvironment: ClientEnvironment = {
      VITE_API_URL: processString("VITE_API_URL", true)
    }
    console.log("Successfully Processed Client Environment")
    return clientEnvironment
  }
  catch (object: unknown) {
    const error = object as Error
    console.error("Error Processing Client Environment")
    console.log(error)
    throw error
  }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

type ClientConfig = {
  API_URL: string,
  APP_NAME: string
}

function generateClientConfig(): ClientConfig {
  try {
    console.log("Generating Client Config")
    const globalConfig: GlobalConfig = generateGlobalConfig()
    const clientEnvironment: ClientEnvironment = processClientEnvironment()
    const clientConfig: ClientConfig = {
      API_URL: clientEnvironment.VITE_API_URL,
      APP_NAME: globalConfig.APP_NAME
    }
    console.log("Successfully Generated Client Config")
    return clientConfig
  }
  catch (object: unknown) {
    const error = object as Error
    console.error("Error Generating Client Config")
    console.log(error)
    throw error
  }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export let clientConfig: ClientConfig
try { clientConfig = generateClientConfig() }
catch (object: unknown) { throw new Error("Configuration Error") }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
