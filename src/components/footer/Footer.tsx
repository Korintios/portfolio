export default function Footer() {
  return (
    <footer className="border-t border-info/25 bg-black">
      <div className="w-full h-full grid justify-center items-center pt-8 text-sm text-info">
        <p>© {new Date().getFullYear()} Juan Camilo V.M. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}
