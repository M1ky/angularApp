import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'lesserThenFilter'
})
export class LesserThenFilterPipe implements PipeTransform {

	transform(value: any[], ...args: any[]): any {
		if (args[1]) {
			return value;
		}

		var lesserThen = [];
		for (let i = 0; i < value.length; i++) {
			if (value[i].getPrice() <= args[0]) {
				lesserThen.push(value[i]);
			}
		}
		return lesserThen;
	}

}
