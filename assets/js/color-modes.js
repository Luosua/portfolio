/*!
 * Color mode toggler for Bootstrap's docs (https://getbootstrap.com/)
 * Copyright 2011-2024 The Bootstrap Authors
 * Licensed under the Creative Commons Attribution 3.0 Unported License.
 */

(() => {
    'use strict'

    console.log('Dark mode toggle script loaded')

    const setStoredTheme = theme => localStorage.setItem('theme', 'dark')

    document.documentElement.setAttribute('data-bs-theme', 'dark')

    const showActiveTheme = (theme, focus = false) => {
      const themeSwitcher = document.querySelectorAll('.bd-theme-selector')

      if (!themeSwitcher) {
        return
      }

      const themeSwitcherText = document.querySelector('#bd-theme-text')
      const activeTheme = document.querySelectorAll('.current-theme')
      const btnToActive = document.querySelectorAll(`[data-bs-theme-value=dark]`)
      //const iconOfActiveBtn = btnToActive.querySelector('span.theme-icon')


      document.querySelectorAll('[data-bs-theme-value]').forEach(element => {
        element.classList.remove('active')
        element.setAttribute('aria-pressed', 'false')
      })
      for (const element of btnToActive){
        element.setAttribute('aria-pressed', 'true')
      }
      for (const element of activeTheme) {
        element.textContent = btnToActive[0].textContent
      }
      for (const element of themeSwitcher) {
        element.setAttribute('aria-label', 'dark')
      }
    }

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
      document.documentElement.setAttribute('data-bs-theme', 'dark')
    })

    window.addEventListener('DOMContentLoaded', () => {
      showActiveTheme('dark')

      document.querySelectorAll('[data-bs-theme-value]')
        .forEach(toggle => {
          toggle.addEventListener('click', () => {
            setStoredTheme("dark")
            document.documentElement.setAttribute('data-bs-theme', 'dark')
            showActiveTheme('dark')
          })
        })
    })
  })()
