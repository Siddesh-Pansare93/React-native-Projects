const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
    transformer: {
        enableBridgeless: false, // Disable Bridgeless mode
    },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
