const { gql } = require("apollo-server");

const typeDefs = gql`
	type Query {
		tracksForHome: [Track!]!
	}

	"A track is a group of modules that teaches about a specific topic"
	type Track {
		"A unique ID give to each track"
		id: ID!
		"The title of the track"
		title: String!
		"The track's author"
		author: Author!
		"The track's thumbnail. A clear picture"
		thumbnail: String
		"The length of the track in minutes"
		length: Int
		"The number of modules in the track"
		modulesCount: Int
	}

	"Author of a complete Track"
	type Author {
		id: ID!
		name: String!
		photo: String
	}
`;

module.exports = typeDefs;
