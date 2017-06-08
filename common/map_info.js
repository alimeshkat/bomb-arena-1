var MapInfo = {
	levelOne: {
		spawnLocations: [{x: 2, y: 5}, {x: 13, y: 1}, {x: 3, y: 1}, {x: 12, y: 6}],
		collisionTiles: [127, 361],
		groundLayer: "Ground",
		blockLayer: "Blocks",
		tilesetName: "tiles",
		tilesetImage: "tiles",
		destructibleTileId: [361]
	},
	levelTwo: {
		spawnLocations: [{x: 2, y: 1}, {x: 13, y: 1}, {x: 2, y: 13}, {x: 13, y: 13}],
		collisionTiles: [169, 191],
		groundLayer: "Ground",
		blockLayer: "Blocks",
		tilesetName: "tiles",
		tilesetImage: "tiles",
		destructibleTileId: [191]
	},
	aztec: {
		spawnLocations: [{x: 1, y: 1}, {x: 1, y: 13}, {x: 13, y: 13}, {x: 13, y: 1}, {x:7, y:1}, {x:6 , y:13}],
		collisionTiles: [125, 160, 238, 240, 243, 264, 268, 270, 294, 297, 354, 397, 399, 401, 427, 429],
		groundLayer: "Ground",
		blockLayer: "Blocks",
		tilesetName: "tiles",
		tilesetImage: "tiles",
		destructibleTileId: [264, 294, 297, 354]
    },
    stones: {
        spawnLocations: [
            {x: 1, y: 1},
            {x: 13, y: 1},
            {x: 13, y: 14},
            {x: 1, y: 14}
        ],
        collisionTiles: [56, 287],
        groundLayer: "Ground",
        blockLayer: "Blocks",
        tilesetName: "tiles",
        tilesetImage: "tiles",
        destructibleTileId: [56]
    }
};

module.exports = MapInfo;