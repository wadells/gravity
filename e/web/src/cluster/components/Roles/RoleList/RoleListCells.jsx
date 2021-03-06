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
import { Cell } from 'shared/components/DataTable';
import MenuAction, { MenuItem } from 'app/cluster/components/components/ActionMenu';

export const RoleNameCell = ({ rowIndex, data}) => {
  const { displayName } = data[rowIndex];
  return (
    <Cell>
      {displayName}
    </Cell>
  )
}

export const ActionCell = ({ rowIndex, onEdit, onDelete, data}) => {
  const { id, owner } = data[rowIndex];
  const onDeleteClick = () => onDelete(id);
  const onEditClick = () => onEdit(id);
  return (
    <Cell align="right">
      <MenuAction buttonIconProps={ { kindColor: "secondaryLight" }}>
        <MenuItem onClick={onEditClick}>
          Edit...
        </MenuItem>
        <MenuItem disabled={owner} onClick={onDeleteClick}>
          Delete...
        </MenuItem>
      </MenuAction>
    </Cell>
  )
}