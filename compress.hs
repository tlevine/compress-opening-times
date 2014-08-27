import qualified Data.Map as M
import Text.Printf (printf)

data Time = Time Int

instance Show Time where
  show (Time minutes) = (printf "% 2s" $ show $ minutes `div` 60) ++ ":" ++ (printf "%02s" $ show $ minutes `mod` 60)

-- A weekly schedule
--
-- A series of tuples starting with Monday, each tuple containing
-- * opening time
-- * closing time
-- * number of days to repeat
--
-- The sum of the last items of these tuples shall be seven.
type DaySchedule (Time, Time, Integer)
type Schedule = [DaySchedule]

exactDiv :: Int -> Maybe Int
exactDiv a b
  | a `mod` b == 0 = Just $ a `div` b
  | otherwise = Nothing

compressTime :: (Time -> Maybe Int) Time
compressTime compressor (Time minutes) =
  case compressor minutes of
    Just result && result >= 0 -> result
    Just result -> Nothing
    Nothing -> Nothing
  where
    compressor

compressOpening = compressTime $ (720 - x) `exactDiv` 30
compressClosing = compressTime $ (1560 - x) `exactDiv` 30

compressDay :: DaySchedule -> String
compressDay (Time opening, Time closing, days) =

main = do
  putStrLn $ show $ Time 302
