import Link from "next/link";
import styles from "@/styles/Home.module.css";
import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  SwipeableDrawer,
  Divider,
  List,
  ListItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import CloseIcon from "@mui/icons-material/Close";

/* Navigation component */
export default function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <AppBar position="sticky" className={styles.navMenu} sx={{ bgcolor: 'transparent', boxShadow: 'none' }}>
        <Toolbar className={styles.navContainer}>
          {/* Place the burger menu on the left side */}
          <Box>
            <IconButton className={styles.burgerIcon} color="black" onClick={() => setOpen(true)}>
              <MenuIcon />
            </IconButton>
          </Box>
          
          <Link className={styles.logo} href="./">
            ROSENDAHL LOGO
          </Link>
        </Toolbar>

        {/* Navigation drawer */}
        <SwipeableDrawer
          anchor="left"
          open={open}
          onOpen={() => setOpen(true)}
          onClose={() => setOpen(false)}
        >
          <IconButton className={styles.backIcon}>
            {/* Close button without mouse-over effect */}
            <CloseIcon
              onClick={() => setOpen(false)}
              sx={{ '&:hover': { backgroundColor: 'transparent' } }}
            />
          </IconButton>
          <Divider></Divider>

          {/* Menu items */}
          <List>
            <ListItem>
              <Link className={styles.navStyleBtn2} href="/recipes">
                OPSKRIFTER
              </Link>
            </ListItem>
            <ListItem>
              <Link className={styles.navStyleBtn2} href="/program">
                INSPIRATION
              </Link>
            </ListItem>
            <ListItem>
              <Link className={styles.navStyleBtn2} href="/index">
                HOME
              </Link>
            </ListItem>
            
          </List>
        </SwipeableDrawer>
      </AppBar>
    </>
  );
}