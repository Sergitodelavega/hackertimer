document.addEventListener("DOMContentLoaded", function() {
    // Heure de fin de la compétition (à adapter selon votre besoin)
    const endTime = new Date("2023-08-20T00:00:00").getTime();

    // Mise à jour de l'affichage du temps restant toutes les secondes
    const timerInterval = setInterval(updateTimer, 1000);

    function updateTimer() {
        const now = new Date().getTime();
        const timeRemaining = endTime - now;

        if (timeRemaining <= 0) {
            clearInterval(timerInterval);
            document.getElementById("timer").innerHTML = "Temps écoulé";
        } else {
            const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

            document.getElementById("timer").innerHTML = days + " jours, " + formatTime(hours) + ":" + formatTime(minutes) + ":" + formatTime(seconds);
        }
    }

    function formatTime(time) {
        return time < 10 ? "0" + time : time;
    }
});
