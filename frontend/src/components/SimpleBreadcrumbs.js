import React from 'react'
import { useLocation, Link as RouterLink } from 'react-router-dom'
import { Breadcrumbs, Typography, Link } from '@mui/material'

export default function SimpleBreadcrumbs() {
  // Get the current location
  let location = useLocation()

  // Extract the pathnames from the location
  const pathnames = location.pathname.split('/').filter((x) => x)

  // Convert a string to title case
  const toTitleCase = (str) => {
    return str.replace(/\b\w+/g, function (s) {
      return s.charAt(0).toUpperCase() + s.substring(1).toLowerCase()
    })
  }

  return (
    <div style={{ marginBlock: 10, marginInline: 20 }}>
      {/* Breadcrumbs component */}
      <Breadcrumbs aria-label='Breadcrumb' separator=">">
        {/* Home link */}
        <Link color='inherit' component={RouterLink} to='/'>
          Home
        </Link>
        {/* Iterate over pathnames to generate breadcrumb links */}
        {pathnames.map((value, index) => {
          const last = index === pathnames.length - 1
          const to = `/${pathnames.slice(0, index + 1).join('/')}`

          return last ? (
            // Current page breadcrumb (text instead of link)
            <Typography color='textPrimary' key={to}>
              {toTitleCase(value)}
            </Typography>
          ) : (
            // Breadcrumb link
            <Link color='inherit' component={RouterLink} to={to} key={to}>
              {toTitleCase(value)}
            </Link>
          )
        })}
      </Breadcrumbs>
    </div>
  )
}
