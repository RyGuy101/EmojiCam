// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const OneDollar = require("one-dollar");
// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
const recognizer = OneDollar();

function makePoints(pointList: [number, number][]) {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return pointList.map(function (point) {
    if (Array.isArray(point)) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
      return new OneDollar.Point(point[0], point[1]);
    }
  });
}

// Custom Gestures
type Gesture = "smiley" | "frowny" | "open_smile" | "tear" | "up" | "circle";
// eslint-disable-next-line prettier/prettier, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
recognizer.addGesture("smiley", makePoints([[161,433],[161,435],[161,437],[161,441],[163,445],[165,450],[169,456],[174,462],[179,469],[190,480],[197,485],[210,492],[226,499],[230,500],[264,503],[267,503],[271,503],[275,503],[278,502],[281,501],[283,499],[286,497],[294,481],[295,476],[299,466],[302,460],[305,454],[308,447],[309,443],[311,440],[312,438],[313,437],[313,436],[313,435],[314,435],[314,435],[314,435]]));
// eslint-disable-next-line prettier/prettier, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
recognizer.addGesture("frowny", makePoints([[155,420],[155,419],[155,418],[155,417],[157,414],[159,412],[161,409],[164,407],[168,403],[172,400],[176,397],[181,395],[185,393],[190,391],[196,389],[200,387],[206,385],[210,384],[216,383],[220,382],[224,382],[228,381],[232,381],[236,381],[239,380],[242,380],[246,380],[249,380],[254,380],[257,380],[259,380],[262,381],[265,382],[268,383],[270,384],[271,385],[275,386],[278,388],[280,389],[283,391],[286,393],[288,394],[291,397],[293,400],[296,402],[298,405],[300,407],[302,409],[303,411],[306,415],[308,419],[308,420],[309,422],[310,425],[311,427],[312,428],[312,430],[313,431],[313,433],[313,434],[314,436],[314,437],[314,438],[314,440],[315,441],[315,442],[315,442],[315,442],[315,443],[315,443],[315,443]]));
// eslint-disable-next-line prettier/prettier, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
recognizer.addGesture("open_smile", makePoints([[147,370],[148,372],[154,377],[161,382],[165,385],[168,387],[174,390],[179,393],[183,396],[198,403],[203,405],[233,409],[247,410],[272,410],[278,409],[282,407],[287,405],[290,404],[293,401],[295,400],[300,396],[302,394],[304,392],[307,389],[308,387],[309,384],[321,363],[321,363],[321,363],[321,363],[321,364],[321,364],[321,364],[321,364],[321,365],[321,365],[321,365],[321,366],[321,366],[321,367],[320,368],[320,368],[320,369],[320,370],[319,371],[317,376],[316,379],[314,383],[312,389],[310,394],[307,401],[304,408],[301,414],[298,420],[296,424],[295,425],[293,428],[290,431],[286,434],[284,436],[282,437],[279,439],[275,440],[271,442],[267,443],[257,446],[250,448],[246,449],[237,451],[228,452],[216,453],[206,454],[202,454],[193,454],[185,453],[179,451],[172,447],[167,443],[161,437],[149,420],[147,415],[145,408],[143,400],[142,393],[142,391],[142,390],[142,389],[142,388],[142,388],[142,388]]));
// eslint-disable-next-line prettier/prettier, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
recognizer.addGesture("tear", makePoints([[224,368],[224,369],[224,370],[224,372],[224,373],[224,374],[224,376],[224,378],[224,380],[224,382],[224,385],[224,387],[224,389],[224,390],[225,392],[225,394],[225,395],[225,397],[225,399],[225,400],[225,402],[225,404],[225,406],[224,407],[224,409],[223,410],[221,414],[219,416],[217,418],[215,420],[210,426],[208,429],[206,432],[205,434],[204,437],[202,440],[201,442],[199,447],[198,449],[198,451],[197,455],[197,458],[197,461],[197,465],[197,468],[197,472],[198,474],[199,477],[200,480],[202,482],[204,485],[207,487],[210,488],[212,489],[215,489],[219,489],[222,489],[226,489],[239,489],[243,487],[246,486],[248,485],[250,483],[251,482],[252,482],[252,481],[252,480],[252,479],[252,477],[251,476],[250,475],[249,474],[245,470],[242,465],[240,461],[238,458],[236,452],[235,446],[234,439],[232,428],[231,419],[230,405],[230,396],[230,388],[230,380],[230,377],[230,372],[230,369],[230,366],[230,365],[230,364],[230,364]]));
// eslint-disable-next-line prettier/prettier, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
recognizer.addGesture("up", makePoints([[228,622],[226,622],[217,622],[212,622],[210,622],[177,622],[175,623],[169,624],[160,633],[158,639],[158,642],[158,643],[158,645],[158,648],[158,650],[180,663],[188,663],[190,663],[193,663],[217,647],[219,638],[220,621],[210,528],[209,509],[209,508],[209,507],[209,507],[209,506]]));
// eslint-disable-next-line prettier/prettier, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
recognizer.addGesture("circle", makePoints([[221,388],[220,388],[220,388],[219,388],[219,388],[218,388],[217,388],[215,388],[214,388],[213,388],[212,388],[210,388],[209,388],[208,388],[207,388],[206,388],[205,388],[204,388],[203,389],[202,389],[201,390],[201,390],[200,391],[199,391],[198,392],[198,392],[197,393],[196,394],[195,395],[195,395],[194,396],[194,397],[193,398],[193,399],[192,401],[192,402],[191,402],[191,403],[191,404],[190,405],[190,407],[190,408],[190,409],[190,410],[189,411],[189,412],[189,413],[189,414],[189,415],[189,416],[189,416],[189,417],[189,418],[190,419],[190,420],[191,421],[191,422],[192,423],[193,424],[193,425],[194,426],[195,427],[196,429],[197,430],[199,431],[200,432],[201,432],[203,433],[204,434],[205,435],[207,435],[209,436],[210,436],[212,436],[213,437],[215,437],[216,437],[218,437],[219,437],[221,437],[223,437],[224,437],[226,437],[228,437],[230,437],[231,436],[233,435],[235,434],[236,433],[237,432],[238,431],[240,430],[240,429],[241,428],[241,427],[242,426],[242,424],[243,423],[243,422],[243,421],[244,420],[244,419],[244,418],[244,416],[245,415],[245,414],[245,413],[245,411],[245,410],[245,409],[245,408],[245,406],[245,405],[245,404],[244,403],[244,402],[243,401],[242,399],[241,398],[240,397],[239,395],[238,394],[237,393],[235,391],[234,390],[233,389],[232,389],[231,388],[230,387],[230,387],[229,387],[229,387],[228,386],[228,386],[228,386],[227,386],[227,386],[226,386],[225,385],[225,385],[225,385],[224,385],[224,385],[223,385],[223,385],[223,385],[223,385],[223,386],[223,386],[223,386],[223,386],[223,387]]));

export function recognizeEmoji(points: [number, number][]) {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
  const gesture = recognizer.recognize(makePoints(points)).Name as
    | Gesture
    | "No match.";
  console.log(gesture);
  if (gesture !== "No match.") {
    const emojiChar = {
      smiley: String.fromCodePoint(0x1f642), //????
      frowny: String.fromCodePoint(0x1f625), //????
      open_smile: String.fromCodePoint(0x1f604), //????
      tear: String.fromCodePoint(0x1f602), //????
      up: String.fromCodePoint(0x1f44d), //????
      circle: String.fromCodePoint(0x1f62e), //????
    }[gesture];

    return emojiChar;
  }

  return null;
}
