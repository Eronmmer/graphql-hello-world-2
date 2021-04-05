import React from "react";
import { Layout } from "../components";
import { gql, useQuery } from "@apollo/client";
import TrackCard from "../containers/track-card";
import QueryResult from "../components/query-result";

export const TRACKS = gql`
	query getTracks {
		tracksForHome {
			id
			title
			thumbnail
			length
			modulesCount
			author {
				id
				name
				photo
			}
		}
	}
`;

/**
 * Tracks Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */
const Tracks = () => {
	const { data, error, loading } = useQuery(TRACKS);
	return (
		<Layout grid>
			<QueryResult data={data} error={error} loading={loading}>
				{data?.tracksForHome?.map((track) => (
					<TrackCard track={track} key={track.id} />
				))}
			</QueryResult>
		</Layout>
	);
};

export default Tracks;
