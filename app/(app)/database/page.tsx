export default function DatabasePage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Database</h1>
        <p className="text-muted-foreground">Manage your database connections and queries</p>
      </div>

      <div className="flex h-[600px] items-center justify-center rounded-lg border border-dashed">
        <div className="text-center">
          <h3 className="text-lg font-semibold">Database Module</h3>
          <p className="text-sm text-muted-foreground mt-2">
            This is a placeholder for the database module.
            <br />
            Follow the same modular pattern to implement your database features.
          </p>
        </div>
      </div>
    </div>
  )
}
