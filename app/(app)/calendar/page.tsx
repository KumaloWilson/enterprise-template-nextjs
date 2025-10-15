export default function CalendarPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Calendar</h1>
        <p className="text-muted-foreground">View and manage your schedule</p>
      </div>

      <div className="flex h-[600px] items-center justify-center rounded-lg border border-dashed">
        <div className="text-center">
          <h3 className="text-lg font-semibold">Calendar Module</h3>
          <p className="text-sm text-muted-foreground mt-2">
            This is a placeholder for the calendar module.
            <br />
            Follow the same modular pattern to implement your calendar features.
          </p>
        </div>
      </div>
    </div>
  )
}
