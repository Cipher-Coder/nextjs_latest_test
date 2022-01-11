function Footer() {
  const d = new Date()
  const year = d.getFullYear()
  return (
    <footer
      id='sticky-footer'
      className='flex-shrink-0 py-4 bg-dark text-white-50'>
      <div className='container text-center'>
        <small>
          Copyright &copy; {year}{' '}
          <a
            className='link_home'
            href='https://getunedited.com'
            target='_blank'
            rel='noopener'>
            Unedited Web Development
          </a>
        </small>
      </div>
    </footer>
  )
}
export default Footer
