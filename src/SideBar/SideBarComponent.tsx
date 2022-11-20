import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { useSelector } from "react-redux";
import ListItem from '@mui/material/ListItem';
import SearchIcon from '@mui/icons-material/Search';

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
    }
    return (
        <>
            {


            }

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
        </>
    );
}

export default SideBarComponent;