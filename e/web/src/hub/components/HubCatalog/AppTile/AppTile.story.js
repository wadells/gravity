/**
 * Copyright 2021 Gravitational Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from 'react';
import { storiesOf } from '@storybook/react'
import AppTile from './AppTile';

storiesOf('GravityHub/HubCatalog', module)
  .add('AppTile', () => {
    return (
      <AppTile apps={apps}/>
    )}
  );

const apps = [
  {
    "id": "gravitational.io/alpine/0.1.0",
    "name": "alpine",
    "version": "0.1.0",
    "repository": "gravitational.io",
    "installUrl": "/web/installer/new/gravitational.io/alpine/0.1.0",
    "kind": "Application",
    "standaloneInstallerUrl": "/portalapi/v1/apps/gravitational.io/alpine/0.1.0/installer",
    "size": "7.22 MB",
    "created": "2019-04-23T16:58:57.451Z",
    "createdText": "23/04/2019 12:58:57",
  },
  {
    "id": "gravitational.io/alpine/0.2.0",
    "name": "alpine",
    "version": "0.2.0",
    "repository": "gravitational.io",
    "installUrl": "/web/installer/new/gravitational.io/alpine/0.1.0",
    "kind": "Application",
    "standaloneInstallerUrl": "/portalapi/v1/apps/gravitational.io/alpine/0.1.0/installer",
    "size": "7.22 MB",
    "created": "2018-04-23T16:58:57.451Z",
    "createdText": "23/04/2018 12:58:57",
  }
]