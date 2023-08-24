import React, { useState } from 'react';
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
  Checkbox,
} from '@mui/material';

import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

interface Jdata {
  department: string;
  sub_departments: string[];
}
const JsonData: Jdata[] = [
  {
    department: 'customer_service',
    sub_departments: ['support', 'customer_success'],
  },
  {
    department: 'design',
    sub_departments: ['graphic_design', 'product_design', 'web_design'],
  },
];

const Component2: React.FC = () => {
  const [expanded, setExpanded] = useState<string[]>([]);
  const [selected, setSelected] = useState<string[]>([]);
  const [selectAllFlag, setSelectAllFlag] = useState<boolean>(true);

  const handleExpandCollapse = (department: string) => {
    if (expanded.includes(department)) {
      setExpanded(expanded.filter((dep) => dep !== department));
    } else {
      setExpanded([...expanded, department]);
    }
  };

  const handleSelect = (subDepartment: string, department: string) => {
    const newSelected = [...selected];
    const subIndex = newSelected.indexOf(subDepartment);

    if (subIndex !== -1) {
      newSelected.splice(subIndex, 1);
    } else {
      newSelected.push(subDepartment);
    }

    const departmentData = JsonData.find((item) => item.department === department);
    if (departmentData) {
      const subDepartments = departmentData.sub_departments;
      if (subDepartments.every((sub) => newSelected.includes(sub))) {
        if (!newSelected.includes(department)) {
          newSelected.push(department);
        }
      } else {
        const depIndex = newSelected.indexOf(department);
        if (depIndex !== -1) {
          newSelected.splice(depIndex, 1);
        }
      }
    }

    setSelected(newSelected);
  };

  const handleSelectAll = (sub_departments: string[], department: string) => {
    if (selectAllFlag) {
      const newSelected = [...selected, department, ...sub_departments];
      setSelected(newSelected);
    } else {
      setSelected([]);
    }

    setSelectAllFlag(!selectAllFlag);
  };

  return (
    <List>
      {JsonData.map((item) => (
        <div key={item.department}>
          <ListItem>
            <ListItemIcon onClick={() => handleExpandCollapse(item.department)}>
              {expanded.includes(item.department) ? <RemoveIcon /> : <AddIcon />}
            </ListItemIcon>
            <ListItemIcon>
              <Checkbox
                checked={selected.includes(item.department)}
                onChange={() => handleSelectAll(item.sub_departments, item.department)}
              />
            </ListItemIcon>
            <ListItemText primary={item.department} />
          </ListItem>
          <Collapse in={expanded.includes(item.department)} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {item.sub_departments.map((subDepartment) => (
                <ListItem
                  key={subDepartment}
                  onClick={() => handleSelect(subDepartment, item.department)}
                  style={{ paddingLeft: '2rem' }}
                  selected={selected.includes(subDepartment)}
                >
                  <ListItemIcon>
                    <Checkbox
                      checked={selected.includes(subDepartment)}
                      onChange={() => handleSelect(subDepartment, item.department)}
                    />
                  </ListItemIcon>
                  <ListItemText primary={subDepartment} />
                </ListItem>
              ))}
            </List>
          </Collapse>
        </div>
      ))}
    </List>
  );
};

export default Component2;

