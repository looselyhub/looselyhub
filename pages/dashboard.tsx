import React, { useEffect, useState } from 'react'
import clsx from 'clsx'
import {
  makeStyles,
  useTheme,
  Theme,
  createStyles,
} from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import CssBaseline from '@material-ui/core/CssBaseline'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import List from '@material-ui/core/List'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Head from 'next/head'
import PrivateRoute from '../components/PrivateRoute'
import Saas from '../components/Saas'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import SaasList from '../services/SaasList'

const drawerWidth = 240

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    appBar: {
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 1),
      [theme.breakpoints.down('md')]: {
        ...theme.mixins.toolbar,
      },
      justifyContent: 'flex-end',
    },
    content: {
      height: '100%',
      flexGrow: 1,
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: -drawerWidth,
    },
    contentShift: {
      height: '100%',
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    },
  })
)

function Dashboard() {
  // TODO: Fetch micro-sass
  // TODO: List micro-sass
  const classes = useStyles()
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up('md'))
  const [currentURL, setURL] = useState('')
  const [open, setOpen] = useState(matches)
  const [saasList, setSaasList] = useState<SaasList>(new SaasList())

  async function fetchSaasList() {
    const saasListObj = new SaasList()
    await saasListObj.fetchList()
    setURL(saasListObj.getHomeURL())
    setSaasList(saasListObj)
  }

  useEffect(() => {
    fetchSaasList()
  }, [])

  useEffect(() => {
    setOpen(matches)
  }, [matches])

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  function appBar() {
    return (
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Persistent drawer
          </Typography>
        </Toolbar>
      </AppBar>
    )
  }

  function drawer() {
    return (
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        {matches ? undefined : (
          <div className={classes.drawerHeader}>
            <IconButton onClick={handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
        )}
        <Divider />
        <ListItem button key={'HOME'}>
          <ListItemText
            primary={'HOME'}
            onClick={() => setURL(saasList.getHomeURL())}
          />
        </ListItem>
        <List>
          {saasList.getList().map((page) => (
            <ListItem button key={page.title}>
              <ListItemText
                primary={page.title}
                onClick={() => setURL(page.url)}
              />
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>
    )
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Head>
      {matches ? <div /> : appBar()}
      {drawer()}
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        <Saas url={currentURL} />
      </main>
      <style global jsx>{`
        html,
        body,
        body > div:first-child,
        div#__next,
        div#__next > div {
          height: 100%;
        }
      `}</style>
    </div>
  )
}

export default PrivateRoute(Dashboard)
