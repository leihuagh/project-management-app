import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { ProjectsByUserIdQuery } from "./withProjectsByUserId";
import { getUserId } from "../../shared/utils/localStorageUtil";

const DeleteProjectMutation = gql`
	mutation ($projectId: Int!) {
		deleteProject (projectId: $projectId)
	}
`;

export const withDeleteProject = graphql(DeleteProjectMutation, {
	props: ({ownProps, mutate}) => ({
		deleteProject: async (variables) => {
			const userId = getUserId();
			const options = {
				variables,
				mutation: DeleteProjectMutation,
				refetchQueries: [{
					query: ProjectsByUserIdQuery,
					variables: {
						userId
					}
				}]
			};

			if (!mutate) {
				throw new Error('withDeleteProject: missing mutate');
			}

			return mutate(options);
		}
	})
});
