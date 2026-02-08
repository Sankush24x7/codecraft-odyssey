#!/usr/bin/env python3
"""
CodeCraft Odyssey - Automated Mission Generator
Creates mission JSON files for levels 16-100

Usage:
    python3 mission_generator_tool.py --world 2 --start 16 --end 25
    python3 mission_generator_tool.py --all  # Generate all remaining missions
"""

import json
import os
import argparse

# Mission templates by world
MISSION_TEMPLATES = {
    # World 2: Backend Roots (16-25)
    16: {
        "title": "HTTP Method Mixer", "type": "fix-the-code", "difficulty": "easy",
        "world": "backend-roots", "worldId": 2, "theme": "modern", "xpReward": 220,
        "badge": "backend-beginner",
        "story": "🏗️ Welcome to Backend Roots! Fix a broken HTTP method handler.",
        "instructions": "Fix handleRequest() to return the correct HTTP method, not the opposite!",
        "starterCode": "function handleRequest(method) {\n  if (method === 'GET') return 'POST'; // 🐛\n  if (method === 'POST') return 'GET'; // 🐛\n  return 'UNKNOWN';\n}",
        "solution": "function handleRequest(method) {\n  return method || 'UNKNOWN';\n}",
        "testCases": [
            {"input": ["GET"], "expected": "GET", "description": "GET request"},
            {"input": ["POST"], "expected": "POST", "description": "POST request"},
            {"input": ["DELETE"], "expected": "UNKNOWN", "description": "Unknown method"}
        ],
        "hints": ["Return the method itself!", "GET should return 'GET'", "Just return the parameter"],
        "nextLevel": 17
    },
    
    17: {
        "title": "Status Code Decoder", "type": "build-from-scratch", "difficulty": "easy",
        "world": "backend-roots", "worldId": 2, "theme": "modern", "xpReward": 230,
        "badge": None,
        "story": "HTTP status codes tell clients what happened. Return the meaning!",
        "instructions": "Create getStatusMessage(code) that returns: 200→'OK', 404→'Not Found', 500→'Server Error', else→'Unknown'",
        "starterCode": "function getStatusMessage(code) {\n  // TODO: Return status message\n}",
        "solution": "function getStatusMessage(code) {\n  if (code === 200) return 'OK';\n  if (code === 404) return 'Not Found';\n  if (code === 500) return 'Server Error';\n  return 'Unknown';\n}",
        "testCases": [
            {"input": [200], "expected": "OK"},
            {"input": [404], "expected": "Not Found"},
            {"input": [500], "expected": "Server Error"},
            {"input": [301], "expected": "Unknown"}
        ],
        "hints": ["Use if/else statements", "Check for 200, 404, 500", "Return 'Unknown' for others"],
        "nextLevel": 18
    },
    
    # Add more templates... (abbreviated for space)
}

def generate_mission_json(mission_id):
    """Generate mission JSON from template"""
    if mission_id in MISSION_TEMPLATES:
        template = MISSION_TEMPLATES[mission_id]
    else:
        # Generate generic template
        template = {
            "title": f"Mission {mission_id}",
            "type": "build-from-scratch",
            "difficulty": "medium",
            "world": "backend-roots",
            "worldId": 2,
            "theme": "modern",
            "xpReward": 200 + (mission_id - 16) * 10,
            "badge": None,
            "story": f"Challenge {mission_id} - Build your skills!",
            "instructions": f"Complete the coding challenge for level {mission_id}.",
            "starterCode": "function solution() {\n  // TODO: Implement\n}",
            "solution": "function solution() {\n  // Solution here\n}",
            "testCases": [
                {"input": [1], "expected": 1, "description": "Test case 1"}
            ],
            "hints": ["Think through the problem", "Break it down", "Test your solution"],
            "nextLevel": mission_id + 1
        }
    
    mission_data = {
        "id": mission_id,
        **template
    }
    
    return mission_data

def save_mission(mission_data, output_dir):
    """Save mission to JSON file"""
    mission_id = mission_data["id"]
    filename = f"level-{mission_id:03d}.json"
    filepath = os.path.join(output_dir, filename)
    
    with open(filepath, 'w') as f:
        json.dump(mission_data, f, indent=2)
    
    return filename

def main():
    parser = argparse.ArgumentParser(description='Generate CodeCraft Odyssey missions')
    parser.add_argument('--world', type=int, help='World number (2-8)')
    parser.add_argument('--start', type=int, help='Start level')
    parser.add_argument('--end', type=int, help='End level')
    parser.add_argument('--all', action='store_true', help='Generate all missions 16-100')
    parser.add_argument('--output', default='/mnt/user-data/outputs/codecraft-odyssey/public/missions',
                       help='Output directory')
    
    args = parser.parse_args()
    
    if args.all:
        start, end = 16, 100
    elif args.start and args.end:
        start, end = args.start, args.end
    else:
        print("Usage: --all OR --start X --end Y")
        return
    
    print(f"🎮 Generating missions {start}-{end}...")
    print(f"📁 Output: {args.output}")
    print()
    
    created = 0
    for mission_id in range(start, end + 1):
        mission_data = generate_mission_json(mission_id)
        filename = save_mission(mission_data, args.output)
        created += 1
        print(f"✅ {filename}")
    
    print()
    print(f"🎉 Created {created} missions!")
    print()
    print("⚠️  NOTE: Template missions need customization!")
    print("   Edit each JSON file to add specific challenges.")

if __name__ == "__main__":
    main()
