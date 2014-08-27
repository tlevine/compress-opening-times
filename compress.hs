data Time = Time Int

instance Show Time where
  show minutes = (show $ minutes `div` 60) ++ ":" ++ (show minutes `mod` 60)

times = [
  Time 600
]

main = do
  show times
