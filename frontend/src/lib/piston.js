import { version } from "react";

const PISTON_API = "https://emkc.org/api/v2/piston";

const LANGUAGE_VERSIONS = {
  javascript: { language: "javascript", version: "18.15.0" },
  python: { language: "python", version: "3.10.0" },
  java: { language: "java", version: "15.0.2" },
};

/**
 *
 * @param {string} language - programming language
 * @param {string} code - source code to executed
 * @returns {Promise<{success:boolean, output?:string, error?: string}>}
 */

export async function executeCode(language, code) {
  try {
    await new Promise((resolve) => setTimeout(resolve, 800));

    if (!code || !code.trim()) {
      return {
        success: false,
        error: "Code is empty",
      };
    }

    if (code.toLowerCase().includes("error")) {
      return {
        success: false,
        error: "Simulated execution error",
      };
    }

    return {
      success: true,
      output: code.trim(),
    };
  } catch (error) {
    return {
      success: false,
      error: "Execution failed",
    };
  }
}

function getFileExtension(language) {
  const extensionns = {
    javascript: "js",
    python: "py",
    java: "java",
  };
  return extensionns[language] || "txt";
}
