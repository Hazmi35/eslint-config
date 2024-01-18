export default [
    {
        rules: {
            // "import/extensions": "off", // TODO: Check if this needed
            "no-restricted-globals": "off",
            "n/prefer-global/buffer": ["error", "always"],
            "n/prefer-global/console": ["error", "always"],
            "n/prefer-global/process": ["error", "always"],
            "n/prefer-global/text-decoder": ["error", "always"],
            "n/prefer-global/text-encoder": ["error", "always"],
            "n/prefer-global/url": ["error", "always"],
            "n/prefer-global/url-search-params": ["error", "always"],
        }
    }
]
