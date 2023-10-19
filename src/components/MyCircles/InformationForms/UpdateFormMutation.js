import {commitMutation, graphql} from 'react-relay';
import environment from 'sportunity/src/createRelayEnvironment'; 


const mutation = graphql`
	mutation UpdateFormMutation($input: updateAskedInformationFormInput!) {
		updateAskedInformationForm(input: $input) {
            clientMutationId,
            viewer {
                id,
                me {
                    id
                    circleInformationForms {
                        id
                        name
                        circles (last: 20) {
                            edges {
                                node {
                                    id
                                    name
                                    owner {
                                        id
                                        pseudo
                                        avatar
                                    }
                                }
                            }
                        }
                        askedInformation {
                            id
                            name
                            type
                            filledByOwner
                        }
                    }
                }
            }
		}
	}
`;

function commit(input, {onSuccess: onCompleted, onFailure: onError}) {
	return commitMutation(environment, {
		mutation, 
		variables: { 
			input : {
                id: input.idVar,
                name: input.nameVar,
                circleIds: input.circleIdsVar,
                askedInformation: input.askedInformationVar
            }
		}, 
		updater: (store) => { 
			/*const payload = store.getRootField('updateAskedInformationForm');
			const newItem = payload.getLinkedRecord('viewer').getLinkedRecord('me'); 
			let currentItem = store.get(input.user.id); 

			currentItem.setLinkedRecords(newItem.getLinkedRecords('circleInformationForms'), 'circleInformationForms')*/
			onCompleted() 
		}, 
		onError 
	}) 
} 

export default {commit}



/*;

export default class updateFormMutation extends Relay.Mutation {

  getMutation() {
    return Relay.QL`mutation Mutation{
      updateAskedInformationForm
    }`
  }
  
  getVariables() {
    return  {
        id: this.props.idVar,
        name: this.props.nameVar,
        circleIds: this.props.circleIdsVar,
        askedInformation: this.props.askedInformationVar
    }
  }

  getFatQuery() {
      return Relay.QL`
        fragment on updateAskedInformationFormPayload {
          clientMutationId,
          viewer {
            id,
            me {
              allCircleMembers
              circleInformationForms
              circles
            }
          }
        }
      `
   
  }

  getConfigs() {
    return [{
      type: 'FIELDS_CHANGE',
        fieldIDs: {
          viewer: this.props.viewer.id,
        },
    }];
  }

  static fragments = {
    viewer: () => Relay.QL`
      fragment on Viewer {
        id,
        me {
          id
          circleInformationForms {
            id
                name
                circles (last: 20) {
                    edges {
                        node {
                            id
                            name
                            owner {
                                id
                                pseudo
                                avatar
                            }
                        }
                    }
                }
                askedInformation {
                    id
                    name
                    type
                    filledByOwner
                }
          }
          allCircleMembers {
                    user {
                        id
                        pseudo
                        avatar
                        lastConnexionDate
                        sports {
                            sport {
                                id
                                name {
                                    EN
                                    FR
                                    DE
                                }
                            }
                        }
                        sportunityNumber
                        followers
                    }
                    circles {
                        circle {
                            id 
                            name
                            memberStatus {
                                member {
                                    id
                                }
                                status
                            }
                            askedInformation {
                                id, 
                                name,
                                type,
                                filledByOwner
                            }
                            membersInformation {
                                id,
                                information,
                                user {
                                    id,
                                }
                                value
                            }
                        }
                        isActive
                    }
          }
        }
        
      }
    `,
  };

}
*/