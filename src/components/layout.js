import React from "react"

export default function Layout({ children }) {
  return (
    <div style={{ margin: `3rem auto`, maxWidth: 650, padding: `4rem`, fontFamily: `sans-serif`, backgroundColor: '#eee', borderRadius: `2rem` }}>
      {children}
    </div>
  )
}
