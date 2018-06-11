export const projectTypes = `
	type Project {
		id: Int!
		createdAt: String!
		updatedAt: String!
		title: String!
		description: String!
		creator: User!
		team: Team
		columns: [Column]
	}
	
	type Query {
		getAllProjects: [Project]!
		getProjectById (projectId: Int!): Project!
	}
	
	type Mutation {
		createProject (title: String!, description: String, createdBy: Int!, teamId: Int): Project!
		updateProjectById (projectId: Int!, title: String, description: String): Project!
		deleteProject (projectId: Int!): Boolean!
	}
`;