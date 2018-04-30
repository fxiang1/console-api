/** *****************************************************************************
 * Licensed Materials - Property of IBM
 * (c) Copyright IBM Corporation 2018. All Rights Reserved.
 *
 * Note to U.S. Government Users Restricted Rights:
 * Use, duplication or disclosure restricted by GSA ADP Schedule
 * Contract with IBM Corp.
 ****************************************************************************** */

import { clusters } from '../../datasource/hcm';

export const typeDef = `
type Cluster {
  ClusterName: String
  ClusterEndpoint: String
  Status: String
  TotalNodes: Int
  TotalDeployments: Int
  TotalPods: Int
  TotalServices: Int
}
`;

export const clusterResolver = {
  Query: {
    clusters,
  },
};
