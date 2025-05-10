import { UserStoreProvider } from "../stores/user-context"

export default function Layout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en">
      <body>
        <UserStoreProvider>
          {children}
        </UserStoreProvider>
      </body>
    </html>

  )
}