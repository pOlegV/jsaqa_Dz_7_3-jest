const sorting = require("../../app");

describe("Books names test suit", () => {
  it("Books names should be sorted in ascending order", () => {
    const input = [
      "Гарри Поттер",
      "Властелин Колец",
      "Волшебник изумрудного города",
    ];

    const expected = [
      "Властелин Колец",
      "Волшебник изумрудного города",
      "Гарри Поттер",
    ];

    const result = sorting.sortByName(input);
    expect(result).toEqual(expected);

    const input2 = ["Властелин Колец", "Властелин Колец"];

    const expected2 = ["Властелин Колец", "Властелин Колец"];

    const result2 = sorting.sortByName(input2);
    expect(result2).toEqual(expected2);
  });
});
