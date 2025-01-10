import Container from "@/components/Container";
import MenuSection from "./MenuSection";
import { menu_data } from "./data";

export default function Menu() {
  return (
    <Container className="py-40 space-y-20">
      <h1 className="text-6xl font-semibold">Our Menu</h1>
      <div className="relative flex gap-x-20">
        {/* STICKY SIDE DIV */}
        <ul className="space-y-10 sticky h-fit top-20 min-w-max">
          <li>Lorem ipsum dolor sit.</li>
          <li>Aspernatur saepe doloribus molestias?</li>
          <li>Qui dolor laudantium rem?</li>
          <li>Explicabo pariatur consectetur soluta?</li>
        </ul>
        {/* MENU SECTIONS */}
        <div className="space-y-32">
          {menu_data.map((menu) => (
            <MenuSection key={menu.section} data={menu} />
          ))}
        </div>
      </div>
    </Container>
  );
}

// function calculateParkingLot(hours: number, minutes: number): number {
// 	if (hours < 0 || minutes < 0 || minutes >= 60) {
// 		return -2;
// 	}

// 	const totalMinutes = hours * 60 + minutes;
// 	if (totalMinutes <= 15) {
// 		return 0;
// 	} else if (totalMinutes <= 120) {
// 		return 5;
// 	} else if (totalMinutes <= 300) {
// 		return 10;
// 	} else {
// 		return 20;}
// }
// const readline = require('readline');
// const rl = readline.createInterface({
// 	input: process.stdin,
// 	output: process.stdout
// });
// rl.question('', (hoursInput: string) => {
// 	const hours = parseInt(hoursInput);
// 	rl.question('', (minutesInput: string) => {
// 		const minutes = parseInt(minutesInput);
// 		if (!isNaN(hours!) && !isNaN(minutes!)) {
// 			const result = calculateParkingLot(hours, minutes);
// 			console.log(result);
// 		} else {
// 			console.error('Invalid input. Please enter valid numbers.');
// 		}
// 		rl.close();
// 	});
// });
