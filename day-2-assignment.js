let participants = ["Mahesh", "Dinesh", "Charlie", "Diana", "Vivek", "Waseem"];

let totalParticipants = participants.length;


if (!totalParticipants) {
    console.log("No participants found. Please register first!");
} else {
    let winnerIndex = Math.floor(Math.random() * totalParticipants);

    const winner = participants[winnerIndex];
    console.log(`🎉 The lucky draw winner is: ${winner}! Congratulations!`);
}
