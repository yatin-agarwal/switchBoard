function handleStart() {
    setIsActive(true);
    setIsPaused(true);
    increment.current = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
    formatTime();
}

const handlePause = () => {
        clearInterval(increment.current)
        setIsPaused(false)
}

const handleResume = () => {
    setIsPaused(true)
    increment.current = setInterval(() => {
      setTimer((timer) => timer + 1)
    }, 1000)
}

const handleReset = () => {
    clearInterval(increment.current)
    setIsActive(false)
    setIsPaused(false)
    setTimer(0)
}

const formatTime = () => {
    const getSeconds = ` 0${(timer % 60)}`.slice(-2)
    const minutes = `${Math.floor(timer / 60)}`
    const getMinutes = ` 0${minutes % 60}`.slice(-2)
    const getHours = ` 0${Math.floor(timer / 3600)}`.slice(-2)

    return `${getHours} : ${getMinutes} : ${getSeconds} `
}

module.exports = {
    handleStart,
    handlePause,
    handleResume,
    handleReset,
    formatTime,
}