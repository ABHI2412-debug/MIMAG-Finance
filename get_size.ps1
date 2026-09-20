Add-Type -AssemblyName System.Drawing
$img = [System.Drawing.Image]::FromFile('C:\Users\ABHI\.gemini\antigravity-ide\brain\7d199bfa-d08b-4e02-8ae9-b60b13fd9321\media__1789919532966.png')
Write-Host "Width: $($img.Width), Height: $($img.Height)"
$img.Dispose()
