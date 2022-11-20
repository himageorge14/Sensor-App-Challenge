import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { useSelector } from "react-redux";
import ListItem from '@mui/material/ListItem';
import SearchIcon from '@mui/icons-material/Search';
import SettingsIcon from '@mui/icons-material/Settings';
import AssessmentIcon from '@mui/icons-material/Assessment';
import TimelineIcon from '@mui/icons-material/Timeline';
import GroupIcon from '@mui/icons-material/Group';

const SideBarComponent = (props: any) => {
    const { toggleDrawer } = useSelector((state: any) => state);
    switch (props.item) {
        case 'Dashboard': {
            return (
                <ListItem key={'Dashboard'} disablePadding sx={{ display: 'block' }}>
                    <ListItemButton
                        sx={{
                            minHeight: 48,
                            justifyContent: toggleDrawer ? 'initial' : 'center',
                            px: 2.5,
                        }}
                    >
                        <ListItemIcon
                            sx={{
                                minWidth: 0,
                                mr: toggleDrawer ? 3 : 'auto',
                                justifyContent: 'center',
                            }}
                        >
                            <SearchIcon />
                        </ListItemIcon>
                        <ListItemText primary={'Dashboard'} sx={{ opacity: toggleDrawer ? 1 : 0 }} />
                    </ListItemButton>
                </ListItem>
            );
        }
        case 'Reports': {
            return (
                <ListItem key={'Reports'} disablePadding sx={{ display: 'block' }}>
                    <ListItemButton
                        sx={{
                            minHeight: 48,
                            justifyContent: toggleDrawer ? 'initial' : 'center',
                            px: 2.5,
                        }}
                    >
                        <ListItemIcon
                            sx={{
                                minWidth: 0,
                                mr: toggleDrawer ? 3 : 'auto',
                                justifyContent: 'center',
                            }}
                        >
                            <AssessmentIcon />
                        </ListItemIcon>
                        <ListItemText primary={'Reports'} sx={{ opacity: toggleDrawer ? 1 : 0 }} />
                    </ListItemButton>
                </ListItem>
            );
        }
        case 'Sensors': {
            return (
                <ListItem key={'Sensors'} disablePadding sx={{ display: 'block' }}>
                    <ListItemButton
                        sx={{
                            minHeight: 48,
                            justifyContent: toggleDrawer ? 'initial' : 'center',
                            px: 2.5,
                        }}
                    >
                        <ListItemIcon
                            sx={{
                                minWidth: 0,
                                mr: toggleDrawer ? 3 : 'auto',
                                justifyContent: 'center',
                            }}
                        >
                            <TimelineIcon />
                        </ListItemIcon>
                        <ListItemText primary={'Sensors'} sx={{ opacity: toggleDrawer ? 1 : 0 }} />
                    </ListItemButton>
                </ListItem>
            );
        }
        case 'Users': {
            return (
                <ListItem key={'Users'} disablePadding sx={{ display: 'block' }}>
                    <ListItemButton
                        sx={{
                            minHeight: 48,
                            justifyContent: toggleDrawer ? 'initial' : 'center',
                            px: 2.5,
                        }}
                    >
                        <ListItemIcon
                            sx={{
                                minWidth: 0,
                                mr: toggleDrawer ? 3 : 'auto',
                                justifyContent: 'center',
                            }}
                        >
                            <GroupIcon  />
                        </ListItemIcon>
                        <ListItemText primary={'Users'} sx={{ opacity: toggleDrawer ? 1 : 0 }} />
                    </ListItemButton>
                </ListItem>
            );
        }
        case 'Settings': {
            return (
                <ListItem key={'Users'} disablePadding sx={{ display: 'block' }}>
                    <ListItemButton
                        sx={{
                            minHeight: 48,
                            justifyContent: toggleDrawer ? 'initial' : 'center',
                            px: 2.5,
                        }}
                    >
                        <ListItemIcon
                            sx={{
                                minWidth: 0,
                                mr: toggleDrawer ? 3 : 'auto',
                                justifyContent: 'center',
                            }}
                        >
                            <SettingsIcon  />
                        </ListItemIcon>
                        <ListItemText primary={'Users'} sx={{ opacity: toggleDrawer ? 1 : 0 }} />
                    </ListItemButton>
                </ListItem>
            );
        }
    }

    return <></>
}

export default SideBarComponent;