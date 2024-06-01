import { Box, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"



export default function NavListDrawers(props) {
    const {navLinks} = props;

    return(
        <Box sx={{width:259}}>
           <nav>
            <List>
                
                    {
                    navLinks.map((item) =>(


                     <ListItem
                      disablePadding
                      key={item.title}
                      >

                        <ListItemButton
                            component="a"
                            href={item.path}
                        >
                            <ListItemIcon>
                            {item.icon}
                        </ListItemIcon>
                            <ListItemText> {item.title} </ListItemText>
                        </ListItemButton>
                    </ListItem>   
                    ))}
       
                </List>
            </nav>
             </Box>
    );
}